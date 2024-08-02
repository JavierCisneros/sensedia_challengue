import Footer from "@/components/Footer";
import FormUsers from "@/components/FormUsers";
import Header from "@/components/Header";

export default function page() {
  return (
    <>
      <Header />
      <div className="flex justify-center pt-10 pb-8">
        <FormUsers />
      </div>
      <Footer />
    </>
  );
}
