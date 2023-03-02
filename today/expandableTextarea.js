const { useRef } = React

function ExpandingTextarea(props) {
    const textareaRef = useRef(null);

    function handleChange() {
        // Resize the textarea to fit the content
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;

        // Pass the value up to the parent component
        props.onChange(textarea.value);
    }

    return (
        <textarea
            ref={textareaRef}
            value={props.value}
            className="expanding-textarea"
            style={{
                minHeight: `${props.minHeight}`,
                maxHeight: `${props.maxHeight}`,
                overflowY: 'auto',
            }}
            onChange={handleChange}
        />
    );
}