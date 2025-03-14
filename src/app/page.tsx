import ImageSection from '../app/components/ImageSection';
import FormSection from '../app/components/FormSection';

export default function Home() {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-12">
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg flex flex-wrap md:flex-col lg:flex-row items-stretch overflow-hidden">
        {/* Left Side: Form Section */}
        <FormSection />
        {/* Right Side: Image Section */}
        <ImageSection />
      </div>
    </div>
  );
}
