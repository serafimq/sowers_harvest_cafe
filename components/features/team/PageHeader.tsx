interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {description && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>}
    </div>
  );
};

export default PageHeader;
