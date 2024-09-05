import React from 'react';
import {
  EuiPageTemplate,
  EuiText,
  EuiTitle,
  EuiPanel,
  EuiAccordion,
  EuiSpacer,
  EuiCallOut,
  EuiLink,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';

const Middle = () => {
  return (
    <EuiPageTemplate>
      <EuiPageTemplate.Header>
        <EuiTitle size="l">
          <h1>Quy Định Về Phương Tiện Giao Thông</h1>
        </EuiTitle>
      </EuiPageTemplate.Header>
      <EuiPageTemplate.Section>
        <EuiPanel>
          <EuiCallOut
            title="Thông báo quan trọng"
            iconType="alert"
            color="danger"
          >
            <p>
              Mọi phương tiện tham gia giao thông phải đảm bảo đầy đủ tiêu chuẩn kỹ thuật và đăng ký theo quy định của pháp luật.
            </p>
          </EuiCallOut>
          <EuiSpacer size="m" />
          {/* Existing Accordion Sections */}
          <EuiAccordion
            id="vehicle-registration"
            buttonContent="1. Đăng Ký Phương Tiện"
            paddingSize="l"
          >
            <EuiText>
              <p>
                Tất cả các phương tiện giao thông đường bộ phải được đăng ký và cấp biển số bởi cơ quan có thẩm quyền. Quy trình đăng ký bao gồm kiểm tra các giấy tờ cần thiết như giấy tờ mua bán, chứng nhận kiểm định an toàn kỹ thuật, và bảo hiểm trách nhiệm dân sự.
              </p>
            </EuiText>
          </EuiAccordion>
          {/* Additional content here... */}
        </EuiPanel>

        {/* Additional Content Below Panel */}
        <EuiSpacer size="l" />

        <EuiPanel paddingSize="l">
          <EuiTitle size="m">
            <h2>Thủ Tục Và Hướng Dẫn</h2>
          </EuiTitle>
          <EuiSpacer size="m" />
          <EuiAccordion
            id="road-usage-rules"
            buttonContent="1. Quy Tắc Sử Dụng Đường Bộ"
            paddingSize="l"
          >
            <EuiText>
              <p>
                Người tham gia giao thông phải tuân thủ các quy tắc sử dụng đường bộ, bao gồm việc nhường đường cho người đi bộ tại các điểm giao cắt và tuân thủ các biển báo giao thông.
              </p>
            </EuiText>
          </EuiAccordion>
          <EuiSpacer size="m" />
          <EuiAccordion
            id="traffic-signs"
            buttonContent="2. Biển Báo Giao Thông"
            paddingSize="l"
          >
            <EuiText>
              <p>
                Hiểu rõ và tuân thủ các biển báo giao thông là yếu tố quan trọng để đảm bảo an toàn giao thông. Các biển báo được chia thành ba nhóm chính: biển báo cấm, biển báo hiệu lệnh, và biển báo chỉ dẫn.
              </p>
            </EuiText>
          </EuiAccordion>
          <EuiSpacer size="m" />
          <EuiAccordion
            id="penalties"
            buttonContent="3. Mức Phạt Vi Phạm"
            paddingSize="l"
          >
            <EuiText>
              <p>
                Người vi phạm luật giao thông đường bộ sẽ bị xử phạt theo quy định. Mức phạt sẽ tùy thuộc vào mức độ nghiêm trọng của vi phạm và có thể bao gồm phạt tiền, tước giấy phép lái xe, hoặc thậm chí tạm giữ phương tiện.
              </p>
            </EuiText>
          </EuiAccordion>
          <EuiSpacer size="m" />
          <EuiAccordion
            id="emergency-procedures"
            buttonContent="4. Quy Trình Xử Lý Tình Huống Khẩn Cấp"
            paddingSize="l"
          >
            <EuiText>
              <p>
                Trong trường hợp xảy ra sự cố hoặc tai nạn, người điều khiển phương tiện phải dừng xe và đặt cảnh báo, gọi điện cho cơ quan chức năng và thực hiện các biện pháp cứu hộ nếu cần thiết.
              </p>
            </EuiText>
          </EuiAccordion>
        </EuiPanel>

        <EuiSpacer size="l" />

        {/* Additional Information Section */}
        <EuiPanel paddingSize="l">
          <EuiTitle size="m">
            <h2>Thông Tin Thêm Về Giao Thông</h2>
          </EuiTitle>
          <EuiSpacer size="m" />
          <EuiText>
            <p>
              Để biết thêm thông tin chi tiết về các quy định giao thông, bạn có thể tham khảo trang web chính thức của Bộ Giao Thông Vận Tải hoặc liên hệ với cơ quan chức năng tại địa phương. Luôn nhớ tuân thủ luật giao thông để đảm bảo an toàn cho bản thân và những người xung quanh.
            </p>
          </EuiText>
        </EuiPanel>
      </EuiPageTemplate.Section>
    </EuiPageTemplate>
  );
};

export default Middle;
