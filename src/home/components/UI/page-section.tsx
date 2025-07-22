
type PageSectionProps = React.PropsWithChildren & {
  id?: string;
};
const PageSection: React.FC<PageSectionProps> = ({ children}) => (
    <section className="bg-primary text-white py-20 px-4 md:px-10">
        {children}
    </section>
);

export default PageSection;

