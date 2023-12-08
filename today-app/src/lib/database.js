/* Database Functions */
import { supabase } from '$lib/supabaseClient';
import { goals } from '$lib/stores/goalsStore';
import { notes } from '$lib/stores/notesStore';

/* Goals */
/* Fetch all goals from the database */
export async function fetchGoals() {
    const { data, error } = await supabase.from('goals').select('*');
    if (error) {
        console.error('Error fetching goals:', error);
    } else {
        goals.set(data);
    }
}

/* Add a new goal to the database */
export async function addGoal(goal) {
    const { data, error } = await supabase.from('goals').insert([goal]).select();
    if (error) {
        console.error('Error adding new goal:', error);
        return false;
    }
    console.log('New goal added:', data);
    return data;
}

/* Delete a goal from the database */
export async function deleteGoal(id) {
    const { data, error } = await supabase.from('goals').delete().match({ id });
    if (error) {
        console.error('Error deleting goal:', error);
        return false;
    }
    console.log('Goal deleted:', data);
    return data;
}

/* Notes */
/* Fetch all notes from the database */
export async function fetchNotes() {
    const { data, error } = await supabase.from('notes').select('*');
    if (error) {
        console.error('Error fetching notes:', error);
    } else {
        notes.set(data);
    }
}

/* Fetch all notes with a given value for goal_id */
export async function fetchNotesByGoalId(goal_id) {
    const { data, error } = await supabase.from('notes').select('*').match({ goal_id });
    if (error) {
        console.error('Error fetching notes:', error);
    } else {
        notes.set(data);
    }
}

/* Add a new note to the database */
export async function addNote(note) {
    const { data, error } = await supabase.from('notes').insert([note]).select();
    if (error) {
        console.error('Error adding new note:', error);
        return false;
    }
    console.log('New note added:', data);
    return data;
}