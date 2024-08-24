import { BenefitsSection } from "@/app/[locale]/(home)/_sections/benefits";
import { CommunitySection } from "@/app/[locale]/(home)/_sections/community";
import { ContactSection } from "@/app/[locale]/(home)/_sections/contact";
import { FAQSection } from "@/app/[locale]/(home)/_sections/faq";
import { FeaturesSection } from "@/app/[locale]/(home)/_sections/features";
import { FooterSection } from "@/app/[locale]/(home)/_sections/footer";
import { HeroSection } from "@/app/[locale]/(home)/_sections/hero";
import { PricingSection } from "@/app/[locale]/(home)/_sections/pricing";
import { ServicesSection } from "@/app/[locale]/(home)/_sections/services";
import { SponsorsSection } from "@/app/[locale]/(home)/_sections/sponsors";
import { TeamSection } from "@/app/[locale]/(home)/_sections/team";
import { TestimonialSection } from "@/app/[locale]/(home)/_sections/testimonial";

export const metadata = {
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    openGraph: {
        type: "website",
        url: "https://github.com/nobruf/shadcn-landing-page.git",
        title: "Shadcn - Landing template",
        description: "Free Shadcn landing page for developers",
        images: [
            {
                url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
                width: 1200,
                height: 630,
                alt: "Shadcn - Landing template",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "https://github.com/nobruf/shadcn-landing-page.git",
        title: "Shadcn - Landing template",
        description: "Free Shadcn landing page for developers",
        images: [
            "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        ],
    },
};

export default function Home() {
    return (
        <>
            <HeroSection />
            <SponsorsSection />
            <BenefitsSection />
            <FeaturesSection />
            <ServicesSection />
            <TestimonialSection />
            <TeamSection />
            <CommunitySection />
            <PricingSection />
            <ContactSection />
            <FAQSection />
            <FooterSection />
        </>
    );
}
