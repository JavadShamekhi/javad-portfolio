import ContactForm from "@/components/ContactForm";
import AnimatedContainer from "@/components/AnimatedContainer";

export default function ContactPage() {
    return (
        <AnimatedContainer className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-5 text-center">Contact Me</h2>
            <p className="dark:text-gray-400 text-gray-700 mb-6 text-center">
                Have a question or want to collaborate? Send me a message using the form below!
            </p>

            <div className="bg-blue-100/50 dark:bg-blue-950/30 p-8 rounded-xl shadow-lg">
                <ContactForm />
            </div>
        </AnimatedContainer>
    )
}