import React, { useState } from 'react';
import { EuiBreadcrumbs, EuiButton } from '@elastic/eui';

const Breadcrumbs = () => {
  // Khởi tạo breadcrumbs với trạng thái ban đầu
  const [breadcrumbs, setBreadcrumbs] = useState([
    { text: 'Home', href: '#' },
    { text: 'Category', href: '#' },
  ]);

  // Hàm để thêm một breadcrumb
  const addBreadcrumb = () => {
    setBreadcrumbs([
      ...breadcrumbs,
      { text: 'New Item', href: '#' }, // Breadcrumb mới được thêm vào
    ]);
  };

  // Hàm để xóa breadcrumb cuối cùng
  const removeBreadcrumb = () => {
    setBreadcrumbs(breadcrumbs.slice(0, -1)); // Xóa breadcrumb cuối cùng
  };

  return (
    <div>
      <EuiBreadcrumbs
        breadcrumbs={breadcrumbs}
        truncate={false}
        aria-label=" Breadcrumbs Example"
      />
      <div className="mt-4">
        <EuiButton onClick={addBreadcrumb} fill>
          Thêm Breadcrumb
        </EuiButton>
        <EuiButton onClick={removeBreadcrumb} color="danger" className="ml-4">
          Xóa Breadcrumb
        </EuiButton>
      </div>
    </div>
  );
};

export default Breadcrumbs;
