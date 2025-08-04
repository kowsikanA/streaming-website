function Loading({ message = "Loading..." }) {
    return (
        <p style={{ fontStyle: "italic", color: "#555" }}>
            ⏳ {message}
        </p>
    );
}

export default Loading;
