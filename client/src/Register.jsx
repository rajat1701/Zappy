// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, Card, TextField, Button, Typography, MenuItem } from "@mui/material";
// import { motion } from "framer-motion";

// export default function Register() {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [role, setRole] = useState("player");
//   const [loading, setLoading] = useState(false);
//   const emojis = ["⚡", "🎯", "🎉", "🔥", "💡", "⭐", "🎮", "🥳"];

//   async function handleRegister() {
//     if (!name || !email || !password || !confirm)
//       return alert("Please fill all fields");
//     if (password !== confirm)
//       return alert("Passwords do not match");

//     setLoading(true);
//     try {
//       const res = await fetch(`${API_URL}/api/auth/register`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//       });


//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Registration failed");

//       // Auto-login
//       const loginRes = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const loginData = await loginRes.json();
//       if (!loginRes.ok) throw new Error(loginData.message);

//       localStorage.setItem("token", loginData.token);
//       localStorage.setItem("role", loginData.user.role);
//       localStorage.setItem("username", loginData.user.username);

//       navigate(loginData.user.role === "host" ? "/host" : "/join");
//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <Box
//       className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden"
//       sx={{
//         background: "radial-gradient(circle at 20% 30%, #7E22CE, #4C1D95, #1E1B4B)",
//       }}
//     >
//       {/* Floating Emojis */}
//       {emojis.map((emoji, i) => (
//         <motion.div
//           key={i}
//           className="absolute text-5xl select-none"
//           style={{
//             top: `${Math.random() * 90}vh`,
//             left: `${Math.random() * 90}vw`,
//             opacity: 0.15 + Math.random() * 0.3,
//           }}
//           animate={{
//             y: [0, -25, 0],
//             x: [0, 10, 0],
//             rotate: [0, 10, -10, 0],
//           }}
//           transition={{
//             duration: 6 + Math.random() * 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: Math.random() * 2,
//           }}
//         >
//           {emoji}
//         </motion.div>
//       ))}

//       {/* Register Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="z-10 w-full max-w-md" 
//         style={{ marginTop: "70px" }} 
//       >
//         <Card
//           className="p-8 bg-white/10 backdrop-blur-lg border border-white/30 text-center shadow-[0_0_25px_rgba(255,255,255,0.3)]"
//           sx={{ borderRadius: "22px", animation: "pulseGlow 3s infinite ease-in-out",}}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               mb: 2,
//               fontWeight: 700,
//               background: "linear-gradient(90deg,#FDE68A,#F9A8D4,#C084FC)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             Create Your Zappy Account ⚡
//           </Typography>

//           <Typography sx={{ color: "#191947ff", mb: 3 }}>
//             Join the quiz world and compete with others!
//           </Typography>

//           <TextField
//             fullWidth
//             label="Full Name"
//             variant="outlined"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             sx={textFieldStyle}
//           />
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             sx={textFieldStyle}
//           />
//           <TextField
//             fullWidth
//             type="password"
//             label="Password"
//             variant="outlined"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             sx={textFieldStyle}
//           />
//           <TextField
//             fullWidth
//             type="password"
//             label="Confirm Password"
//             variant="outlined"
//             value={confirm}
//             onChange={(e) => setConfirm(e.target.value)}
//             sx={textFieldStyle}
//           />

//           <TextField
//             select
//             fullWidth
//             label="Role"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             sx={textFieldStyle}
//           >
//             <MenuItem value="player">Player</MenuItem>
//             <MenuItem value="host">Host</MenuItem>
//             <MenuItem value="admin">Admin</MenuItem>
//           </TextField>

//           <Button
//             fullWidth
//             variant="contained"
//             onClick={handleRegister}
//             disabled={loading}
//             sx={{
//               py: 1.4,
//               mb: 2,
//               borderRadius: "12px",
//               fontWeight: 600,
//               background: "linear-gradient(90deg,#FDE68A,#F9A8D4,#C084FC)",
//               color: "#1E1B4B",
//               "&:hover": {
//                 transform: "scale(1.05)",
//                 boxShadow: "0 0 30px rgba(255,215,0,0.4)",
//               },
//             }}
//           >
//             {loading ? "Registering..." : "Register"}
//           </Button>

//           <Typography sx={{ color: "#191947ff" }}>
//             Already have an account?{" "}
//             <span
//               style={{
//                 color: "#F9A8D4",
//                 cursor: "pointer",
//                 fontWeight: 600,
//               }}
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </span>
//           </Typography>
//         </Card>
//       </motion.div>
//     </Box>
//   );
// }

// const textFieldStyle = {
//   mb: 2,
//   input: { color: "#191947ff" },
//   label: { color: "rgba(33, 23, 90, 0.7)" },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
//     "&:hover fieldset": { borderColor: "#f9a8d4" },
//   },
// };


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, Card, TextField, Button, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// export default function Register() {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [loading, setLoading] = useState(false);

//   const emojis = ["⚡", "🎯", "🎉", "🔥", "💡", "⭐", "🎮", "🥳"];

//   async function handleRegister() {
//     if (!name || !email || !password || !confirm)
//       return alert("Please fill all fields");

//     if (password !== confirm)
//       return alert("Passwords do not match");

//     setLoading(true);

//     try {
//       // Register request
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Registration failed");

//       // Auto-login after register
//       const loginRes = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const loginData = await loginRes.json();
//       if (!loginRes.ok) throw new Error(loginData.message);

//       // Save token + name
//       localStorage.setItem("token", loginData.token);
//       localStorage.setItem("name", loginData.user.name);
//       localStorage.setItem("role", loginData.user.role);

//       // Redirect only to /host (hosts only)
//       navigate("/host");

//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <Box
//       className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden"
//       sx={{
//         background: "radial-gradient(circle at 20% 30%, #7E22CE, #4C1D95, #1E1B4B)",
//       }}
//     >
//       {/* Floating Emojis */}
//       {emojis.map((emoji, i) => (
//         <motion.div
//           key={i}
//           className="absolute text-5xl select-none"
//           style={{
//             top: `${Math.random() * 90}vh`,
//             left: `${Math.random() * 90}vw`,
//             opacity: 0.15 + Math.random() * 0.3,
//           }}
//           animate={{
//             y: [0, -25, 0],
//             x: [0, 10, 0],
//             rotate: [0, 10, -10, 0],
//           }}
//           transition={{
//             duration: 6 + Math.random() * 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: Math.random() * 2,
//           }}
//         >
//           {emoji}
//         </motion.div>
//       ))}

//       {/* Register Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="z-10 w-full max-w-md"
//         style={{ marginTop: "70px" }}
//       >
//         <Card
//           className="p-8 bg-white/10 backdrop-blur-lg border border-white/30 text-center shadow-[0_0_25px_rgba(255,255,255,0.3)]"
//           sx={{
//             borderRadius: "22px",
//             animation: "pulseGlow 3s infinite ease-in-out",
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               mb: 2,
//               fontWeight: 700,
//               background: "linear-gradient(90deg,#FDE68A,#F9A8D4,#C084FC)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             Create Your Zappy Account ⚡
//           </Typography>

//           <Typography sx={{ color: "#191947ff", mb: 3 }}>
//             Host exciting quiz games in seconds!
//           </Typography>

//           <TextField
//             fullWidth
//             label="Full Name"
//             variant="outlined"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             sx={textFieldStyle}
//           />

//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             sx={textFieldStyle}
//           />

//           <TextField
//             fullWidth
//             type="password"
//             label="Password"
//             variant="outlined"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             sx={textFieldStyle}
//           />

//           <TextField
//             fullWidth
//             type="password"
//             label="Confirm Password"
//             variant="outlined"
//             value={confirm}
//             onChange={(e) => setConfirm(e.target.value)}
//             sx={textFieldStyle}
//           />

//           <Button
//             fullWidth
//             variant="contained"
//             onClick={handleRegister}
//             disabled={loading}
//             sx={{
//               py: 1.4,
//               mb: 2,
//               borderRadius: "12px",
//               fontWeight: 600,
//               background: "linear-gradient(90deg,#FDE68A,#F9A8D4,#C084FC)",
//               color: "#1E1B4B",
//               "&:hover": {
//                 transform: "scale(1.05)",
//                 boxShadow: "0 0 30px rgba(255,215,0,0.4)",
//               },
//             }}
//           >
//             {loading ? "Registering..." : "Register"}
//           </Button>

//           <Typography sx={{ color: "#191947ff" }}>
//             Already have an account?{" "}
//             <span
//               style={{
//                 color: "#F9A8D4",
//                 cursor: "pointer",
//                 fontWeight: 600,
//               }}
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </span>
//           </Typography>
//         </Card>
//       </motion.div>
//     </Box>
//   );
// }

// const textFieldStyle = {
//   mb: 2,
//   input: { color: "#191947ff" },
//   label: { color: "rgba(33, 23, 90, 0.7)" },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
//     "&:hover fieldset": { borderColor: "#f9a8d4" },
//   },
// };


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, Card, TextField, Button, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// export default function Register() {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [loading, setLoading] = useState(false);

//   const emojis = ["⚡", "🎯", "🎉", "🔥", "💡", "⭐", "🎮", "🥳"];

//   async function handleRegister() {
//     if (!name || !email || !password || !confirm)
//       return alert("Please fill all fields");
//     if (password !== confirm)
//       return alert("Passwords do not match");

//     setLoading(true);

//     try {
//       // REGISTER
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),  // ✅ now correct
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Registration failed");

//       // AUTO LOGIN
//       const loginRes = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const loginData = await loginRes.json();
//       if (!loginRes.ok) throw new Error(loginData.message);

//       // Save token
//       localStorage.setItem("token", loginData.token);
//       localStorage.setItem("username", loginData.user.name);

//       navigate("/host");
//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <Box
//       className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden"
//       sx={{
//         background: "radial-gradient(circle at 20% 30%, #7E22CE, #4C1D95, #1E1B4B)",
//       }}
//     >
//       {/* Floating Emojis */}
//       {emojis.map((emoji, i) => (
//         <motion.div
//           key={i}
//           className="absolute text-5xl select-none"
//           style={{
//             top: `${Math.random() * 90}vh`,
//             left: `${Math.random() * 90}vw`,
//             opacity: 0.15 + Math.random() * 0.3,
//           }}
//           animate={{
//             y: [0, -25, 0],
//             x: [0, 10, 0],
//             rotate: [0, 10, -10, 0],
//           }}
//           transition={{
//             duration: 6 + Math.random() * 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: Math.random() * 2,
//           }}
//         >
//           {emoji}
//         </motion.div>
//       ))}

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="z-10 w-full max-w-md"
//         style={{ marginTop: "70px" }}
//       >
//         <Card
//           className="p-8 bg-white/10 backdrop-blur-lg border border-white/30 text-center shadow-[0_0_25px_rgba(255,255,255,0.3)]"
//           sx={{
//             borderRadius: "22px",
//             animation: "pulseGlow 3s infinite ease-in-out",
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               mb: 2,
//               fontWeight: 700,
//               background: "linear-gradient(90deg,#FDE68A,#F9A8D4,#C084FC)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             Create Your Zappy Account ⚡
//           </Typography>

//           <Typography sx={{ color: "#191947ff", mb: 3 }}>
//             Join the quiz world and compete with others!
//           </Typography>

//           <TextField
//             fullWidth
//             label="Full Name"
//             variant="outlined"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             sx={textFieldStyle}
//           />

//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             sx={textFieldStyle}
//           />

//           <TextField
//             fullWidth
//             type="password"
//             label="Password"
//             variant="outlined"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             sx={textFieldStyle}
//           />

//           <TextField
//             fullWidth
//             type="password"
//             label="Confirm Password"
//             variant="outlined"
//             value={confirm}
//             onChange={(e) => setConfirm(e.target.value)}
//             sx={textFieldStyle}
//           />

//           <Button
//             fullWidth
//             variant="contained"
//             onClick={handleRegister}
//             disabled={loading}
//             sx={{
//               py: 1.4,
//               mb: 2,
//               borderRadius: "12px",
//               fontWeight: 600,
//               background: "linear-gradient(90deg,#FDE68A,#F9A8D4,#C084FC)",
//               color: "#1E1B4B",
//               "&:hover": {
//                 transform: "scale(1.05)",
//                 boxShadow: "0 0 30px rgba(255,215,0,0.4)",
//               },
//             }}
//           >
//             {loading ? "Registering..." : "Register"}
//           </Button>

//           <Typography sx={{ color: "#191947ff" }}>
//             Already have an account?{" "}
//             <span
//               style={{
//                 color: "#F9A8D4",
//                 cursor: "pointer",
//                 fontWeight: 600,
//               }}
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </span>
//           </Typography>
//         </Card>
//       </motion.div>
//     </Box>
//   );
// }

// const textFieldStyle = {
//   mb: 2,
//   input: { color: "#191947ff" },
//   label: { color: "rgba(33, 23, 90, 0.7)" },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
//     "&:hover fieldset": { borderColor: "#f9a8d4" },
//   },
// };


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, TextField, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const emojis = ["⚡", "🎯", "🎉", "🔥", "💡"];

  // async function handleRegister() {
  //   if (!name || !email || !password || !confirm)
  //     return alert("All fields required");

  //   if (password !== confirm) return alert("Passwords don't match");

  //   setLoading(true);

  //   try {
  //     const res = await fetch(
  //       `${import.meta.env.VITE_API_URL}/api/auth/register`,
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ name, email, password }),
  //       }
  //     );

  //     const data = await res.json();
  //     if (!res.ok) throw new Error(data.message);

  //     // Save token and login
  //     localStorage.setItem("token", data.token);
  //     localStorage.setItem("user", JSON.stringify(data.user));

  //     navigate("/host");
  //   } catch (err) {
  //     alert(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  async function handleRegister() {
  if (!name || !email || !password || !confirm)
    return alert("All fields required");

  if (password !== confirm) return alert("Passwords don't match");

  setLoading(true);

  try {
    const host= "host";
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, host}),
      }
    );

    const text = await res.text();      
    const data = text ? JSON.parse(text) : {};   // SAFE PARSE

    if (!res.ok) throw new Error(data.message || "Registration failed");

    // Auto login
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    navigate("/host");
  } catch (err) {
    alert(err.message);
  } finally {
    setLoading(false);
  }
}


  return (
    <Box 
      className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden"
      sx={{
        background: "radial-gradient(circle at 20% 30%, #7E22CE, #4C1D95, #1E1B4B)",
      }}
      >
         {emojis.map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-5xl select-none"
          style={{
            top: `${Math.random() * 90}vh`,
            left: `${Math.random() * 90}vw`,
            opacity: 0.15 + Math.random() * 0.3,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        >
          {emoji}
        </motion.div>
      ))}

        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 w-full max-w-md"
      >
      <Card 
          className="p-8 bg-white/10 backdrop-blur-lg border border-white/30 text-center shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          sx={{
            borderRadius: "22px",
            animation: "pulseGlow 3s infinite ease-in-out",
            marginTop: "50px",
          }}
          >
        <Typography 
           variant="h4"
            sx={{
              mb: 2,
              fontWeight: 700,
              background: "linear-gradient(90deg,#FDE68A,#F9A8D4,#C084FC)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            >
          Register
        </Typography>

        <TextField
          fullWidth
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4"
            variant="outlined"
            sx={{
              mb: 2,
              input: { color: "rgba(23, 21, 91, 0.7)" },
              label: { color: "rgba(45, 52, 113, 0.7)" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                "&:hover fieldset": { borderColor: "#f9a8d4" },
              },
            }}
        />

        <TextField
          fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              mb: 2,
              input: { color: "rgba(23, 21, 91, 0.7)" },
              label: { color: "rgba(45, 52, 113, 0.7)" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                "&:hover fieldset": { borderColor: "#f9a8d4" },
              },
            }}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
              mb: 2,
              input: { color: "rgba(23, 21, 91, 0.7)" },
              label: { color: "rgba(45, 52, 113, 0.7)" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                "&:hover fieldset": { borderColor: "#f9a8d4" },
              },
            }}
        />

        <TextField
          fullWidth
          type="password"
          label="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          sx={{
              mb: 2,
              input: { color: "rgba(23, 21, 91, 0.7)" },
              label: { color: "rgba(45, 52, 113, 0.7)" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                "&:hover fieldset": { borderColor: "#f9a8d4" },
              },
            }}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleRegister}
          disabled={loading}
            sx={{
              py: 1.4,
              mb: 2,
              borderRadius: "12px",
              fontWeight: 600,
              background: "linear-gradient(90deg,#FDE68A,#F9A8D4,#C084FC)",
              color: "#1E1B4B",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 0 30px rgba(255,215,0,0.4)",
              },
            }}
        >
          {loading ? "Registering..." : "Register"}
        </Button>

        <Typography 
              sx={{
              mb: 2,
              fontWeight: 700,
              WebkitBackgroundClip: "text",
            }}
        >
          <e
          style={{
              color: "#f9a8d4",
              cursor: "pointer",  
            }}
            >
              Already have an account?{" "}
              </e>
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            <e
            style={{
              color: "#281169ff",
              cursor: "pointer",  
            }}>
              Login
            </e>
          </span>
        </Typography>
      </Card>
      </motion.div>
    </Box>
  );
}
