import * as React from "react";

import useApiListConversations from "@/app/hook/useApiListConversations";
import { SearchForm } from "@/components/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isLoading, data } = useApiListConversations();

  const isItemActive = false;

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {isLoading && "Loading..."}

        {data.map((item, index) => (
          <SidebarMenu key={"sidebar_content" + index + item.input}>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isItemActive}>
                <a href={`/c/${item.id}`}>{item.input}</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
