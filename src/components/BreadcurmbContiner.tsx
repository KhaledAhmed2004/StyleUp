import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router';

const BreadcurmbContiner = () => {
  return (
    <section className="h-[160px] bg-neutral-white-w100 py-[40px]">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-[12px]">
        <h3 className="heading-h3-normal-bold">Login</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link to="/">StyleUp</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Login</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};

export default BreadcurmbContiner;
