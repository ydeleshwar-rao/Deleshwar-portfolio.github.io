
type PageSectionProps = React.PropsWithChildren & {
  id?: string;
};

const PageSection: React.FC<PageSectionProps> = ({ children }) => (
  <section className="bg-primary text-white py-20 px-4 md:px-10 overflow-hidden">
    {/* Mobile: Contained with overflow control and centered */}
    <div className="block lg:hidden w-full max-w-full mx-auto overflow-x-hidden">
      <div className="w-full max-w-full px-0 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
    
    {/* Desktop: Original layout with centering */}
    <div className="hidden lg:block w-full max-w-6xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full">
        {children}
      </div>
    </div>
  </section>
);

export default PageSection;