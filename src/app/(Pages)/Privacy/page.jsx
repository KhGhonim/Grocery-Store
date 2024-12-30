import Footer from "_components/Footer";
import DesktopHeader from "_components/HeaderDesktop/DesktopHeader";
import MobileHeader from "_components/HeaderPhone/MobileHeader";
import PolicyTabs from "_components/PolicyAndTermsPage/PolicyTabs";

export default function Page() {
  return (
    <div>
      <DesktopHeader />
      <MobileHeader />
      <PolicyTabs />
      <Footer />
    </div>
  );
}
