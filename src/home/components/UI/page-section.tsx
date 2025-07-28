
// type PageSectionProps = React.PropsWithChildren & {
//   id?: string;
// };
// const PageSection: React.FC<PageSectionProps> = ({ children}) => (
//     <section className="bg-primary text-white py-20 px-4 md:px-10">
//         {children}
//     </section>
// );

// export default PageSection;

// type PageSectionProps = React.PropsWithChildren & {
//   id?: string;
// };

// const PageSection: React.FC<PageSectionProps> = ({ children }) => (
//   <section className="bg-primary text-white py-20 px-4 md:px-10 w-full min-h-screen overflow-x-hidden">
//     <div className="w-full max-w-full mx-auto overflow-x-hidden">
//       <div className="w-full max-w-7xl mx-auto px-0 sm:px-4 lg:px-8">
//         {children}
//       </div>
//     </div>
//   </section>
// );

// export default PageSection;

// workin in mobile view 
// type PageSectionProps = React.PropsWithChildren & {
//   id?: string;
// };

// const PageSection: React.FC<PageSectionProps> = ({ children }) => (
//   <section className="bg-primary text-white py-20 px-4 md:px-10">
//     {/* Mobile: Contained with overflow control */}
//     <div className="block lg:hidden w-full max-w-full mx-auto overflow-x-hidden">
//       <div className="w-full max-w-full px-0">
//         {children}
//       </div>
//     </div>
    
//     {/* Desktop: Original layout */}
//     <div className="hidden lg:block">
//       {children}
//     </div>
//   </section>
// );

// export default PageSection;


type PageSectionProps = React.PropsWithChildren & {
  id?: string;
};

const PageSection: React.FC<PageSectionProps> = ({ children }) => (
  <section className="bg-primary text-white py-20 px-4 md:px-10">
    {/* Mobile: Contained with overflow control and centered */}
    <div className="block lg:hidden w-full max-w-full mx-auto overflow-x-hidden">
      <div className="w-full max-w-full px-0 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
    
    {/* Desktop: Original layout with centering */}
    <div className="hidden lg:block w-full">
      <div className="flex flex-col items-center justify-center w-full">
        {children}
      </div>
    </div>
  </section>
);

export default PageSection;