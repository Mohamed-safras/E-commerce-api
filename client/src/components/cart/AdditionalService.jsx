import CustomizedSwitches from "../Switch.component";
import {
  Container,
  PackagePrice,
  PackageType,
  ServiceEnabalButton,
  ServicePackage,
} from "./additional_service.styles";
const AdditionalService = () => {
  return (
    <Container>
      <ServicePackage>
        <PackageType>
          <span className="package_name">Care+Package</span>
          <span>One year of additional care</span>
        </PackageType>
        <PackagePrice>Rs.{"2.00"}</PackagePrice>
        <ServiceEnabalButton>
          <CustomizedSwitches />
        </ServiceEnabalButton>
      </ServicePackage>
      <ServicePackage>
        <PackageType>
          <span className="package_name">Care+Package</span>
          <span>One year of additional care</span>
        </PackageType>
        <PackagePrice>Rs.{"2.00"}</PackagePrice>
        <ServiceEnabalButton>
          <CustomizedSwitches />
        </ServiceEnabalButton>
      </ServicePackage>
      <ServicePackage>
        <PackageType>
          <span className="package_name">Care+Package</span>
          <span>One year of additional care</span>
        </PackageType>
        <PackagePrice>Rs.{"2.00"}</PackagePrice>
        <ServiceEnabalButton>
          <CustomizedSwitches />
        </ServiceEnabalButton>
      </ServicePackage>
    </Container>
  );
};

export default AdditionalService;
