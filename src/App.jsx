import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { useLenisScroll } from "./hooks/useLenisScroll.js";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import CaseStudyPage from "./pages/CaseStudyPage.jsx";
import Login from "./pages/Login.tsx";

function AppRoutes() {
	useLenisScroll();

	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/" element={<Home />} />
			<Route path="/work-history" element={<Navigate to="/about" replace />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/case-study/:slug" element={<CaseStudyPage />} />
			<Route
				path="/case-study/growth-design"
				element={<Navigate to="/case-study/survey-builder-transformation" replace />}
			/>
			<Route
				path="/work/ai-design-process"
				element={<Navigate to="/case-study/operationalizing-ai-native-design" replace />}
			/>
			<Route
				path="/case-study/ai-first"
				element={<Navigate to="/case-study/operationalizing-ai-native-design" replace />}
			/>
			<Route
				path="/case-study/workspace-chat-agent"
				element={<Navigate to="/case-study/vsco-workspace" replace />}
			/>
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
}

export default function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
			<Analytics />
		</BrowserRouter>
	);
}
