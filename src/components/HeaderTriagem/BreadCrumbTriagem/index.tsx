import React from 'react';

import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

export function BreadCrumbTriagem(){
    return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className='text-[#016C8C] font-extrabold text-base' href="/triagem">Triagem</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[#016C8C] "/>
        <BreadcrumbItem>
          <BreadcrumbLink className='text-[#016C8C] font-extrabold text-base' href="/triagem/paciente">Paciente</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    );
};
