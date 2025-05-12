// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from '@/components/ui/breadcrumb';
// import { Link } from 'react-router';

// const BreadcurmbContiner = () => {
//   return (
//     <section className="h-[160px] bg-neutral-white-w100 py-[40px]">
//       <div className="mx-auto flex max-w-7xl flex-col gap-2 px-[12px]">
//         <h3 className="heading-h3-normal-bold">Login</h3>
//         <Breadcrumb>
//           <BreadcrumbList>
//             <BreadcrumbItem>
//               <BreadcrumbLink>
//                 <Link to="/">StyleUp</Link>
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator />
//             <BreadcrumbItem>
//               <BreadcrumbPage>Login</BreadcrumbPage>
//             </BreadcrumbItem>
//           </BreadcrumbList>
//         </Breadcrumb>
//       </div>
//     </section>
//   );
// };

// export default BreadcurmbContiner;

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from '@/components/ui/breadcrumb';
// import { Link, useLocation } from 'react-router';

// const BreadcrumbContainer = () => {
//   const location = useLocation();

//   // Split the pathname and remove empty strings
//   const pathnames = location.pathname.split('/').filter((x) => x);

//   // Format URL segments: handle dashes and capitalize nicely
//   const formatSegment = (segment: string) => {
//     return segment
//       .split('-')
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   };

//   return (
//     <section className="h-[160px] bg-neutral-white-w100 py-[40px]">
//       <div className="mx-auto flex max-w-7xl flex-col gap-2 px-[12px]">
//         <h3 className="heading-h3-normal-bold">
//           {pathnames.length > 0
//             ? formatSegment(pathnames[pathnames.length - 1])
//             : 'Home'}
//         </h3>

//         <Breadcrumb>
//           <BreadcrumbList>
//             <BreadcrumbItem>
//               <BreadcrumbLink asChild>
//                 <Link
//                   to="/"
//                   className="rounded-md px-2 py-1 transition-all hover:bg-gray-100 hover:underline"
//                 >
//                   StyleUp
//                 </Link>
//               </BreadcrumbLink>
//             </BreadcrumbItem>

//             {pathnames.map((name, index) => {
//               const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
//               const isLast = index === pathnames.length - 1;

//               return (
//                 <BreadcrumbItem key={routeTo}>
//                   <BreadcrumbSeparator />
//                   {isLast ? (
//                     <BreadcrumbPage>{formatSegment(name)}</BreadcrumbPage>
//                   ) : (
//                     <BreadcrumbLink asChild>
//                       <Link
//                         to={routeTo}
//                         className="rounded-md px-2 py-1 transition-all hover:bg-gray-100 hover:underline"
//                       >
//                         {formatSegment(name)}
//                       </Link>
//                     </BreadcrumbLink>
//                   )}
//                 </BreadcrumbItem>
//               );
//             })}
//           </BreadcrumbList>
//         </Breadcrumb>
//       </div>
//     </section>
//   );
// };

// export default BreadcrumbContainer;

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from '@/components/ui/breadcrumb';
// import { Link, useLocation } from 'react-router';

// const BreadcrumbContainer = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split('/').filter((x) => x);

//   const formatSegment = (segment: string) =>
//     segment
//       .split('-')
//       .map(w => w.charAt(0).toUpperCase() + w.slice(1))
//       .join(' ');

//   // Shared classes for all <Link>s
//   const linkBase = "relative px-2 py-1 rounded-md transition-colors duration-200 ease-out hover:bg-gray-100";
//   const groupClass = "group inline-block";

//   return (
//     <section className="h-[160px] bg-neutral-white-w100 py-[40px]">
//       <div className="mx-auto max-w-7xl px-[12px] flex flex-col gap-2">
//         <h3 className="heading-h3-normal-bold">
//           {pathnames.length
//             ? formatSegment(pathnames[pathnames.length - 1])
//             : 'Home'}
//         </h3>

//         <Breadcrumb>
//           <BreadcrumbList>
//             <BreadcrumbItem>
//               <BreadcrumbLink asChild>
//                 <Link to="/" className={`${groupClass} ${linkBase}`}>
//                   {/* Text */}
//                   <span className="relative z-10">StyleUp</span>
//                   {/* Underline */}
//                   <span
//                     className="
//                       absolute left-0 bottom-0 h-[2px] w-full bg-gray-400
//                       scale-x-0 transform transition-transform duration-200 ease-out
//                       group-hover:scale-x-100 origin-left
//                     "
//                   />
//                 </Link>
//               </BreadcrumbLink>
//             </BreadcrumbItem>

//             {pathnames.map((name, idx) => {
//               const routeTo = '/' + pathnames.slice(0, idx + 1).join('/');
//               const isLast = idx === pathnames.length - 1;

//               return (
//                 <BreadcrumbItem key={routeTo}>
//                   <BreadcrumbSeparator />
//                   {isLast ? (
//                     <BreadcrumbPage>{formatSegment(name)}</BreadcrumbPage>
//                   ) : (
//                     <BreadcrumbLink asChild>
//                       <Link to={routeTo} className={`${groupClass} ${linkBase}`}>
//                         <span className="relative z-10">
//                           {formatSegment(name)}
//                         </span>
//                         <span
//                           className="
//                             absolute left-0 bottom-0 h-[2px] w-full bg-gray-400
//                             scale-x-0 transform transition-transform duration-200 ease-out
//                             group-hover:scale-x-100 origin-left
//                           "
//                         />
//                       </Link>
//                     </BreadcrumbLink>
//                   )}
//                 </BreadcrumbItem>
//               );
//             })}
//           </BreadcrumbList>
//         </Breadcrumb>
//       </div>
//     </section>
//   );
// };

// export default BreadcrumbContainer;

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from '@/components/ui/breadcrumb';
// import { Link, useLocation } from 'react-router';

// const BreadcrumbContainer = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split('/').filter((x) => x);

//   const formatSegment = (segment: string) =>
//     segment
//       .split('-')
//       .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//       .join(' ');

//   // Shared classes for all <Link>s, including transitions on the pseudo-element
//   const linkClasses = [
//     "relative px-2 py-1 rounded-md",
//     // background hover
//     "transition-colors duration-200 ease-out hover:bg-gray-100",
//     // underline pseudo-element
//     "before:content-['']",
//     "before:absolute before:h-[2px] before:bg-gray-400 before:bottom-0",
//     "before:left-1/2 before:w-0",
//     // **add transition on width & left**
//     "before:transition-all before:duration-200 before:ease-out",
//     // on hover: expand and move pseudo-element
//     "hover:before:left-0 hover:before:w-full"
//   ].join(" ");

//   return (
//     <section className="h-[160px] bg-neutral-white-w100 py-[40px]">
//       <div className="mx-auto max-w-7xl px-[12px] flex flex-col gap-2">
//         <h3 className="heading-h3-normal-bold">
//           {pathnames.length
//             ? formatSegment(pathnames[pathnames.length - 1])
//             : 'Home'}
//         </h3>

//         <Breadcrumb>
//           <BreadcrumbList>
//             <BreadcrumbItem>
//               <BreadcrumbLink asChild>
//                 <Link to="/" className={linkClasses}>
//                   StyleUp
//                 </Link>
//               </BreadcrumbLink>
//             </BreadcrumbItem>

//             {pathnames.map((name, idx) => {
//               const routeTo = '/' + pathnames.slice(0, idx + 1).join('/');
//               const isLast = idx === pathnames.length - 1;

//               return (
//                 <BreadcrumbItem key={routeTo}>
//                   <BreadcrumbSeparator />
//                   {isLast ? (
//                     <BreadcrumbPage>{formatSegment(name)}</BreadcrumbPage>
//                   ) : (
//                     <BreadcrumbLink asChild>
//                       <Link to={routeTo} className={linkClasses}>
//                         {formatSegment(name)}
//                       </Link>
//                     </BreadcrumbLink>
//                   )}
//                 </BreadcrumbItem>
//               );
//             })}
//           </BreadcrumbList>
//         </Breadcrumb>
//       </div>
//     </section>
//   );
// };

// export default BreadcrumbContainer;

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from '@/components/ui/breadcrumb';
// import { Link, useLocation } from 'react-router';
// import {
//   Home as HomeIcon,
//   User as UserIcon,
//   Box as BoxIcon,
//   // …import whatever others you want
// } from 'lucide-react';

// const BreadcrumbContainer = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split('/').filter(Boolean);

//   const formatSegment = (seg: string) =>
//     seg
//       .split('-')
//       .map(w => w[0].toUpperCase() + w.slice(1))
//       .join(' ');

//   // Map URL segment → icon component
//   const iconMap: Record<string, React.ComponentType<any>> = {
//     '': HomeIcon,
//     'profile': UserIcon,
//     'profile/orders': BoxIcon,
//     // add your own mappings…
//   };

//   // Wrapper for link classes + group for hover underline
//   const linkBase = "group inline-block relative px-2 py-1 rounded-md transition-colors duration-200 ease-out hover:bg-gray-100";

//   return (
//     <section className="h-[160px] bg-neutral-white-w100 py-[40px]">
//       <div className="mx-auto max-w-7xl px-3 flex flex-col gap-2">
//         <h3 className="heading-h3-normal-bold">
//           {pathnames.length
//             ? formatSegment(pathnames[pathnames.length - 1])
//             : 'Home'}
//         </h3>

//         <Breadcrumb>
//           <BreadcrumbList>
//             {/* Home item with icon */}
//             <BreadcrumbItem>
//               <BreadcrumbLink asChild>
//                 <Link to="/" className={linkBase}>
//                   <HomeIcon className="inline-block h-4 w-4 mr-1 align-text-bottom" />
//                   <span className="relative z-10">StyleUp</span>
//                   <span
//                     className="
//                       absolute left-0 bottom-0 h-[2px] w-full bg-gray-400
//                       scale-x-0 transform transition-transform duration-200 ease-out
//                       group-hover:scale-x-100 origin-left
//                     "
//                   />
//                 </Link>
//               </BreadcrumbLink>
//             </BreadcrumbItem>

//             {pathnames.map((name, idx) => {
//               const routeTo = '/' + pathnames.slice(0, idx + 1).join('/');
//               const isLast = idx === pathnames.length - 1;
//               const SegmentIcon = iconMap[pathnames[idx]];

//               return (
//                 <BreadcrumbItem key={routeTo}>
//                   <BreadcrumbSeparator />
//                   {isLast ? (
//                     <BreadcrumbPage>
//                       {SegmentIcon && (
//                         <SegmentIcon className="inline-block h-4 w-4 mr-1 align-text-bottom" />
//                       )}
//                       {formatSegment(name)}
//                     </BreadcrumbPage>
//                   ) : (
//                     <BreadcrumbLink asChild>
//                       <Link to={routeTo} className={linkBase}>
//                         {SegmentIcon && (
//                           <SegmentIcon className="inline-block h-4 w-4 mr-1 align-text-bottom" />
//                         )}
//                         <span className="relative z-10">
//                           {formatSegment(name)}
//                         </span>
//                         <span
//                           className="
//                             absolute left-0 bottom-0 h-[2px] w-full bg-gray-400
//                             scale-x-0 transform transition-transform duration-200 ease-out
//                             group-hover:scale-x-100 origin-left
//                           "
//                         />
//                       </Link>
//                     </BreadcrumbLink>
//                   )}
//                 </BreadcrumbItem>
//               );
//             })}
//           </BreadcrumbList>
//         </Breadcrumb>
//       </div>
//     </section>
//   );
// };

// export default BreadcrumbContainer;

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from '@/components/ui/breadcrumb';
// import { Link, useLocation } from 'react-router';
// import {
//   Home as HomeIcon,
//   Box as BoxIcon,
//   User as UserIcon,
//   Heart as HeartIcon,
//   MapPin as MapPinIcon,
//   Lock as LockIcon,
//   FileText as FileTextIcon,
// } from 'lucide-react';

// const BreadcrumbContainer = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split('/').filter((x) => x);

//   // Build full-path icon map including your profile sub-routes
//   const iconMap: Record<string, React.ComponentType<any>> = {
//     '/': HomeIcon,
//     '/profile': UserIcon,
//     '/profile/orders': BoxIcon,
//     '/profile/wishlist': HeartIcon, 
//     '/profile/address': MapPinIcon, 
//     '/profile/password': LockIcon, 
//     '/profile/details': FileTextIcon, 
//     // add more mappings if needed…
//   };

//   const formatSegment = (segment: string) =>
//     segment
//       .split('-')
//       .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//       .join(' ');

//   const linkBase =
//     'group inline-block relative px-2 py-1 rounded-md transition-colors duration-200 ease-out hover:bg-gray-100';
//   const underlineSpan = (
//     <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transform bg-gray-400 transition-transform duration-200 ease-out group-hover:scale-x-100" />
//   );

//   return (
//     <section className="h-[160px] bg-neutral-white-w100 py-[40px]">
//       <div className="mx-auto flex max-w-7xl flex-col gap-2 px-[12px]">
//         <h3 className="heading-h3-normal-bold">
//           {pathnames.length
//             ? formatSegment(pathnames[pathnames.length - 1])
//             : 'Home'}
//         </h3>

//         <Breadcrumb>
//           <BreadcrumbList>
//             {/* Home */}
//             <BreadcrumbItem>
//               <BreadcrumbLink asChild>
//                 <Link to="/" className={linkBase}>
//                   <HomeIcon className="mr-1 inline-block h-4 w-4 align-text-bottom text-gray-600" />
//                   <span className="relative z-10">StyleUp</span>
//                   {underlineSpan}
//                 </Link>
//               </BreadcrumbLink>
//             </BreadcrumbItem>

//             {pathnames.map((segment, idx) => {
//               const routeTo = '/' + pathnames.slice(0, idx + 1).join('/');
//               const isLast = idx === pathnames.length - 1;
//               const IconComp = iconMap[routeTo] || BoxIcon;

//               return (
//                 <BreadcrumbItem key={routeTo}>
//                   <BreadcrumbSeparator />
//                   {isLast ? (
//                     <BreadcrumbPage>
//                       <IconComp className="mr-1 inline-block h-4 w-4 align-text-bottom text-gray-600" />
//                       {formatSegment(segment)}
//                     </BreadcrumbPage>
//                   ) : (
//                     <BreadcrumbLink asChild>
//                       <Link to={routeTo} className={linkBase}>
//                         <IconComp className="mr-1 inline-block h-4 w-4 align-text-bottom text-gray-600" />
//                         <span className="relative z-10">
//                           {formatSegment(segment)}
//                         </span>
//                         {underlineSpan}
//                       </Link>
//                     </BreadcrumbLink>
//                   )}
//                 </BreadcrumbItem>
//               );
//             })}
//           </BreadcrumbList>
//         </Breadcrumb>
//       </div>
//     </section>
//   );
// };

// export default BreadcrumbContainer;

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link, useLocation } from 'react-router';
import {
  Home as HomeIcon,
  Box as BoxIcon,
  User as UserIcon,
  Heart as HeartIcon,
  MapPin as MapPinIcon,
  Lock as LockIcon,
  FileText as FileTextIcon,
} from 'lucide-react';

// Props for the BreadcrumbContainer: allow toggling icons on/off
interface BreadcrumbContainerProps {
  showIcons?: boolean; // if true, render icons before each segment
}

const BreadcrumbContainer: React.FC<BreadcrumbContainerProps> = ({ showIcons = true }) => {
  const location = useLocation();
  // Split path into segments, filter out empty
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Map full paths to icon components
  const iconMap: Record<string, React.ComponentType<any>> = {
    '/': HomeIcon,
    '/profile': UserIcon,
    '/profile/orders': BoxIcon,
    '/profile/wishlist': HeartIcon,
    '/profile/address': MapPinIcon,
    '/profile/password': LockIcon,
    '/profile/details': FileTextIcon,
    // add more mappings as needed
  };

  // Format "user-profile" => "User Profile"
  const formatSegment = (segment: string) =>
    segment
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

  // Base classes for link styling and underline animation
  const linkBase =
    'group inline-block relative px-2 py-1 rounded-md transition-colors duration-200 ease-out hover:bg-gray-100';
  const underlineSpan = (
    <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transform bg-gray-400 transition-transform duration-200 ease-out group-hover:scale-x-100" />
  );

  return (
    <section className="h-[160px] bg-neutral-white-w100 py-[40px]">
      <div className="mx-auto max-w-7xl px-[12px] flex flex-col gap-2">
        {/* Page heading: last segment or Home */}
        <h3 className="heading-h3-normal-bold">
          {pathnames.length
            ? formatSegment(pathnames[pathnames.length - 1])
            : 'Home'}
        </h3>

        <Breadcrumb>
          <BreadcrumbList>
            {/* Home item */}
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className={linkBase}>
                  {/* Conditionally render Home icon */}
                  {showIcons && (
                    <HomeIcon className="mr-1 inline-block h-4 w-4 align-text-bottom text-gray-600" />
                  )}
                  <span className="relative z-10">StyleUp</span>
                  {underlineSpan}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {/* Dynamic segments */}
            {pathnames.map((segment, idx) => {
              // Build route path up to this segment
              const routeTo = '/' + pathnames.slice(0, idx + 1).join('/');
              const isLast = idx === pathnames.length - 1;
              // Lookup icon: fallback to BoxIcon
              const IconComp = iconMap[routeTo] || BoxIcon;

              return (
                <BreadcrumbItem key={routeTo}>
                  <BreadcrumbSeparator />

                  {isLast ? (
                    // Current page
                    <BreadcrumbPage>
                      {/* Conditionally render segment icon */}
                      {showIcons && (
                        <IconComp className="mr-1 inline-block h-4 w-4 align-text-bottom text-gray-600" />
                      )}
                      {formatSegment(segment)}
                    </BreadcrumbPage>
                  ) : (
                    // Link to intermediate path
                    <BreadcrumbLink asChild>
                      <Link to={routeTo} className={linkBase}>
                        {/* Conditionally render segment icon */}
                        {showIcons && (
                          <IconComp className="mr-1 inline-block h-4 w-4 align-text-bottom text-gray-600" />
                        )}
                        <span className="relative z-10">
                          {formatSegment(segment)}
                        </span>
                        {underlineSpan}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};

export default BreadcrumbContainer;
