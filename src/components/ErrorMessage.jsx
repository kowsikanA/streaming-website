function ErrorMessage({ message }) {
    return (
        <p style={{ color: "red", backgroundColor: "#fee", padding: "1rem", borderRadius: "6px" }}>
            ❌ {message}
        </p>
    );
}

export default ErrorMessage;
