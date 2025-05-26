
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { JobObjective } from "@/components/JobObjective";
import { Education } from "@/components/Education";
import { CoreCompetencies } from "@/components/CoreCompetencies";
import { ProfileSummary } from "@/components/ProfileSummary";
import { WorkExperience } from "@/components/WorkExperience";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Courses } from "@/components/Courses";
import { PersonalDetails } from "@/components/PersonalDetails";
import { Recommendations } from "@/components/Recommendations";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <JobObjective />
      <Education />
      <CoreCompetencies />
      <ProfileSummary />
      <WorkExperience />
      <TechnicalSkills />
      <Certifications />
      <Projects />
      <Courses />
      <PersonalDetails />
      <Recommendations />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
