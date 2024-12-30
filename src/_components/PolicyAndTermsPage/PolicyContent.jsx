import Section from './Section'
import { FaShieldAlt, FaUsers } from 'react-icons/fa'
import { FaLock, FaUserCheck } from 'react-icons/fa6'

export default function PolicyContent() {
  return (
    <div className="space-y-12">
    <Section
      icon={<FaUsers className="w-8 h-8 text-blue-500" />}
      title="Information We Collect"
      content="We collect information that you provide directly to us, including when you create an account, make a purchase, sign up for our newsletter, or contact us for support."
      image="https://images.unsplash.com/photo-1576267423048-15c0040fec78?auto=format&fit=crop&q=80"
    />

    <Section
      icon={<FaShieldAlt  className="w-8 h-8 text-green-500" />}
      title="How We Use Your Information"
      content="We use the information we collect to process your orders, personalize your shopping experience, send you marketing communications (with your consent), and improve our services."
      image="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80"
    />

    <Section
      icon={<FaLock className="w-8 h-8 text-purple-500" />}
      title="Data Security"
      content="We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction."
      image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
    />

    <Section
      icon={<FaUserCheck  className="w-8 h-8 text-orange-500" />}
      title="Your Rights"
      content="You have the right to access, correct, or delete your personal data. You can also object to processing and request data portability."
      image="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&q=80"
    />
  </div>

  )

}
