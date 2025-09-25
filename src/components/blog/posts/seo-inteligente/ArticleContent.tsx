
import { ImpactSection } from "./sections/ImpactSection";
import { ToolsSection } from "./sections/ToolsSection";
import { KeywordsSection } from "./sections/KeywordsSection";
import { OptimizationSection } from "./sections/OptimizationSection";
import { UserExperienceSection } from "./sections/UserExperienceSection";
import { CompetitionSection } from "./sections/CompetitionSection";
import { FutureSection } from "./sections/FutureSection";
import { ContactCTASection } from "./sections/ContactCTASection";

export function ArticleContent() {
  return (
    <div className="prose prose-lg prose-invert max-w-none">
      <ImpactSection />
      <ToolsSection />
      <KeywordsSection />
      <OptimizationSection />
      <UserExperienceSection />
      <CompetitionSection />
      <FutureSection />
      <ContactCTASection />
    </div>
  );
}
