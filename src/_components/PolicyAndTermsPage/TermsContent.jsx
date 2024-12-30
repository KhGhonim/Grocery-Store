import Section from "./Section";
import { FaRegCopyright, FaShoppingBag, FaUserPlus } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";

export default function TermsContent() {
  return (
    <div className="space-y-12">
      <Section
        icon={<FaUserPlus className="w-8 h-8 text-indigo-500" />}
        title="Account Terms"
        content="You must be at least 18 years old to create an account. You are responsible for maintaining the security of your account credentials."
        image="https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&q=80"
      />

      <Section
        icon={<FaShoppingBag className="w-8 h-8 text-pink-500" />}
        title="Shopping & Orders"
        content="By placing an order, you agree to pay the specified price for the products. We reserve the right to refuse service to anyone for any reason at any time."
        image="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
      />

      <Section
        icon={<FaTruck className="w-8 h-8 text-yellow-500" />}
        title="Delivery & Returns"
        content="We aim to deliver products within the specified timeframe. Returns are accepted within 14 days of delivery for non-perishable items in their original condition."
        image="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80"
      />

      <Section
        icon={<FaRegCopyright className="w-8 h-8 text-teal-500" />}
        title="Intellectual Property"
        content="All content on our website, including text, graphics, logos, and images, is our property and protected by copyright laws."
        image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
      />
    </div>
  );
}
