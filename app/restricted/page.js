export default function Restricted() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "#e5e5e5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
      }}
    >
      <div style={{ maxWidth: "520px", textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>
          ⚠️ Website Temporarily Unavailable
        </h1>

        <p style={{ fontSize: "16px", lineHeight: "1.6", opacity: 0.9 }}>
          The website has encountered a critical issue due to low maintenance
          and unexpected system instability.
        </p>

        <div
          style={{
            marginTop: "24px",
            padding: "16px",
            background: "#121212",
            border: "1px solid #1f1f1f",
            borderRadius: "8px",
            textAlign: "left",
            fontSize: "14px",
            opacity: 0.85,
          }}
        >
          <p><strong>Error Code:</strong> MAINTENANCE_FAILURE_503</p>
          <p><strong>Status:</strong> Services unavailable</p>
          <p><strong>Last Check:</strong> System resources not responding</p>
        </div>

        <p
          style={{
            marginTop: "20px",
            fontSize: "13px",
            opacity: 0.6,
          }}
        >
          We are working to restore services as soon as possible.
          Please check back later.
        </p>
      </div>
    </main>
  );
}
// a
// a