import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import WorkHistory from "./pages/WorkHistory.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import CaseStudyPage from "./pages/CaseStudyPage.jsx";
import Login from "./pages/Login.tsx";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Home />} />
				<Route path="/work-history" element={<WorkHistory />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/case-study/:slug" element={<CaseStudyPage />} />
				<Route
					path="/work/ai-design-process"
					element={<Navigate to="/case-study/ai-design-ops" replace />}
				/>
				<Route
					path="/case-study/ai-first"
					element={<Navigate to="/case-study/ai-design-ops" replace />}
				/>
				<Route
					path="/case-study/workspace-chat-agent"
					element={<Navigate to="/case-study/building-atlas" replace />}
				/>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
}
