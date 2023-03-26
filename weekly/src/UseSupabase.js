import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nwhtnjhsbfkpncfftcpn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53aHRuamhzYmZrcG5jZmZ0Y3BuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkxNzE1NzQsImV4cCI6MTk5NDc0NzU3NH0.1bfGGB3i5EHsHQGLdNE3R8qwiQ5BzL_VqTkISmZaaR8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function useSupabase() {
    // Updates
    // ----------------------------------------
    const [updates, setUpdates] = useState([]);

    useEffect(() => {
        getUpdates();
    }, []);

    async function getUpdates() {
        const { data, error } = await supabase
            .from('Updates')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.log('error', error);
        } else {
            setUpdates(data);
        }
    }

    async function addUpdate(description, visualUrl) {
        const { data, error } = await supabase
            .from('Updates')
            .insert({ description, visualUrl });

        if (error) {
            console.log('error', error);
        } else {
            getUpdates();
        }
    }

    async function deleteUpdate(id) {
        const { data, error } = await supabase
            .from('Updates')
            .delete().eq('id', id);

        if (error) {
            console.log('error', error);
        } else {
            getUpdates();
        }
    }

    async function uploadVisual(file) {
        const fileData = file;
        const timestamp = new Date().getTime();
        const fileName = `${timestamp}-${fileData.name}`;
        const fileType = fileData.type;
        const filePath = `public/${fileName}`;
        const { data, error } = await supabase.storage.from('update-visuals').upload(filePath, fileData, {
            contentType: fileType,
        });

        if (error) {
            console.error(error);
            return false;
        } else {
            console.log(`File ${fileName} uploaded successfully`);
            return filePath;
        }
    }


    // Goals
    // ----------------------------------------
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        getGoals();
    }, []);

    async function getGoals() {
        const { data, error } = await supabase
            .from('Goals')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.log('error', error);
        } else {
            setGoals(data);
        }
    }

    async function getActiveGoal() {
        const { data, error } = await supabase
            .from('Goals')
            .select('*')
            .eq('status', 'active')
            .order('created_at', { ascending: false })
            .limit(1);

        if (error) {
            console.log('error', error);
        } else {
            return data[0];
        }
    }

    async function getArchivedGoals() {
        const { data, error } = await supabase
            .from('Goals')
            .select('*')
            .eq('status', 'archived')
            .order('created_at', { ascending: false });

        if (error) {
            console.log('error', error);
        } else {
            return data;
        }
    }

    async function addGoal(description, status) {
        if (!status) {
            status = 'active';
        }

        const { data, error } = await supabase
            .from('Goals')
            .insert({ description, status });

        if (error) {
            console.log('error', error);
        } else {
            getGoals();
        }
    }

    async function updateGoal(id, description, status) {
        const { data, error } = await supabase
            .from('Goals')
            .update({ description, status })
            .eq('id', id);

        if (error) {
            console.log('error', error);
        } else {
            getGoals();
        }
    }

    async function setGoalStatus(id, status) {
        const { data, error } = await supabase
            .from('Goals')
            .update({ status })
            .eq('id', id);

        if (error) {
            console.log('error', error);
        } else {
            getGoals();
        }
    }

    async function deleteGoal(id) {
        const { data, error } = await supabase
            .from('Goals')
            .delete().eq('id', id);

        if (error) {
            console.log('error', error);
        } else {
            getGoals();
        }
    }


    // Tasks
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks();
    }, []);

    async function getTasks() {
        const { data, error } = await supabase
            .from('Tasks')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.log('error', error);
        } else {
            setTasks(data);
        }
    }

    async function addTask(description, status) {
        if (!status) {
            status = 'active';
        }

        const { data, error } = await supabase
            .from('Tasks')
            .insert({ description, status });

        if (error) {
            console.log('error', error);
        } else {
            getTasks();
        }
    }

    async function updateTask(id, description, status) {
        const { data, error } = await supabase
            .from('Tasks')
            .update({ description, status })
            .eq('id', id);

        if (error) {
            console.log('error', error);
        } else {
            getTasks();
        }
    }

    async function updateTaskStatus(id, status) {
        const { data, error } = await supabase
            .from('Tasks')
            .update({ status })
            .eq('id', id);

        if (error) {
            console.log('error', error);
        } else {
            getTasks();
        }
    }

    async function deleteTask(id) {
        const { data, error } = await supabase
            .from('Tasks')
            .delete().eq('id', id);

        if (error) {
            console.log('error', error);
        } else {
            getTasks();
        }
    }

    return {
        updates,
        addUpdate,
        deleteUpdate,
        uploadVisual,
        getUpdates,
        goals,
        getGoals,
        addGoal,
        updateGoal,
        setGoalStatus,
        deleteGoal,
        tasks,
        getTasks,
        updateTask,
        updateTaskStatus,
        addTask,
        deleteTask,
    };
}
