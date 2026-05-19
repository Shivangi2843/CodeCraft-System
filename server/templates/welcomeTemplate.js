const welcomeTemplate = (name) => {
  return `

  <div
    style="
      background:#0f172a;
      color:white;
      padding:40px;
      font-family:sans-serif;
    "
  >

    <h1 style="color:#38bdf8;">
      Welcome to CodeCraft 🚀
    </h1>

    <p>Hello ${name},</p>

    <p>
      Your account has been created successfully.
    </p>

    <div
      style="
        background:#1e293b;
        padding:20px;
        border-radius:10px;
        margin-top:20px;
      "
    >

      <h2>Platform Features</h2>

      <ul>
        <li>💻 Compiler</li>
        <li>📚 Learning Center</li>
        <li>🧠 Practice Arena</li>
        <li>📁 Projects Hub</li>
        <li>📄 Resume Builder</li>
      </ul>

    </div>

    <a
      href="http://localhost:5173/login"

      style="
        display:inline-block;
        margin-top:25px;
        padding:12px 20px;
        background:#2563eb;
        color:white;
        text-decoration:none;
        border-radius:8px;
      "
    >
      Login Now
    </a>

  </div>

  `;
};

export default welcomeTemplate;