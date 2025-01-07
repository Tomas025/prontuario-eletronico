import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

export function BreadCrumbTriagem() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-[#016C8C] font-extrabold text-base"
            href="/triagem"
          >
            Triagem
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[#016C8C] " />
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-[#016C8C] font-extrabold text-base"
            href="/triagem/paciente"
          >
            Paciente
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
