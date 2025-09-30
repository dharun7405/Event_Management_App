import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { EventsPage } from "./pages/EventsPage"
import { EventDetailsPage } from "./pages/EventDetailsPage"
import { MyEventsPage } from "./pages/MyEventsPage"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { EditEventPage } from "./pages/EditEventPage"


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<EventsPage />} />
            <Route path="/my-events" element={<MyEventsPage />} />
            <Route path="/events/:eventId" element={<EventDetailsPage />} />
            <Route path="/events/:eventId/edit" element={<EditEventPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
