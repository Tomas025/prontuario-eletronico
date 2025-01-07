import React, { Fragment } from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

import { ListLink } from './types/typesBreadCrumb';

type BreadCrumbProps = {
  linkList: ListLink[];
};

export function BreadCrumb({ linkList }: BreadCrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {linkList.map((link, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-[#016C8C] font-extrabold text-base"
                href={link.route}
              >
                {link.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {linkList.length > index + 1 && (
              <BreadcrumbSeparator className="text-[#016C8C] " />
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
