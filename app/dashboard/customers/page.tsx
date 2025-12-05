import { Suspense } from "react";
import CustomersTable from "@/app/ui/customers/table";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { fetchFilteredCustomers } from "@/app/lib/data";

export const metadata = {
  title: "Customers",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";

  return (
    <div className="w-full">
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <CustomersWrapper query={query} />
      </Suspense>
    </div>
  );
}

async function CustomersWrapper({ query }: { query: string }) {
  const customers = await fetchFilteredCustomers(query);
  return <CustomersTable customers={customers} />;
}
