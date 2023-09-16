import { AcademicCapIcon, LinkIcon, BookOpenIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export default function CustomIcon({type}) {
  let icon;
  
  if (type === 'tools') icon = <WrenchScrewdriverIcon className="h-6 w-6 text-white" aria-hidden="true" />;
  if (type === 'teach') icon = <AcademicCapIcon className="h-6 w-6 text-white" aria-hidden="true" />;
  if (type === 'glossary') icon = <BookOpenIcon className="h-6 w-6 text-white" aria-hidden="true" />;
  if (type === 'resources') icon = <LinkIcon className="h-6 w-6 text-white" aria-hidden="true" />;

  return (
    <div className={`left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600`}>
      {icon}
    </div>
  );
}
