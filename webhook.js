import express from "express";
import crypto from "crypto";
const app = express();
const PORT = 4567;

// IMPORTANT: Match this with the secret you define in GitHub UI
const WEBHOOK_SECRET = "your_gym_crud_secret_here";

// Use raw body parsing to validate the GitHub cryptographic signature accurately
app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  }),
);

// Verification Middleware
function verifyGitHubSignature(req, res, next) {
  const signature = req.headers["x-hub-signature-256"];
  if (!signature) {
    return res.status(401).send("Missing signature header.");
  }

  const hmac = crypto.createHmac("sha256", WEBHOOK_SECRET);
  const digest = "sha256=" + hmac.update(req.rawBody).digest("hex");

  if (crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest))) {
    next();
  } else {
    res
      .status(403)
      .send("Request signatures do not match. Invalid request origin.");
  }
}

// Webhook endpoint
app.post("/webhook", verifyGitHubSignature, (req, res) => {
  const payload = req.body;
  const eventType = req.headers["x-github-event"];

  console.log(`🚀 Received event: "${eventType}" from GymCRUD Repository`);

  if (eventType === "push") {
    const branch = payload.ref;
    const commits = payload.commits;

    console.log(`Branch modified: ${branch}`);
    console.log(`Latest commit by: ${payload.pusher.name}`);

    // Loop through commits to extract details
    commits.forEach((commit) => {
      console.log(`- Commit Message: ${commit.message}`);
      console.log(`- Commit ID: ${commit.id}`);

      // --- TRIGGER YOUR GEMINI CODE EXTENSION HERE ---
      // This is exactly where you will feed commit.id or the payload
      // information into your Gemini API script to start analysis.
    });
  }

  res.status(200).send("Webhook processed successfully.");
});

app.listen(PORT, () => {
  console.log(`🎯 Webhook listener server is live on http://localhost:${PORT}`);
});
