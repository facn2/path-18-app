import styled from 'styled-components';

const CareerContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  background-color: #fff;
  height: 100%;
  font-size: 0.9rem;
  color: #455a64;
  text-align: right;
`;

const CareerTitle = styled.h1`
  text-align: right;
  font-size: 1.5rem;
  padding-bottom: 0.3rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  text-align: center;
  margin: 0 auto;
`;

const DetailSection = styled.div`
  padding: 1rem 0;
  border-bottom: 0.1rem solid gainsboro;
  border-width: thin;
  line-height: 1.2rem;
  padding: 1.5rem 0;
`;

const SalaryStart = styled.div`
  text-align: right;
`;

const Start = styled.div`
  text-align: right;
`;

const SalaryTenYear = styled.div`
  text-align: right;
`;

const TenYear = styled.div`
  text-align: right;
`;

const TableContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  padding: 0 0.4rem;
  text-align: center;
  line-height: 1.2rem;
`;

const Grade = styled.p`
  text-align: right;
`;

const Icon = styled.i`
  font-size: 2rem;
  color: #f06292;
`;

const CareerLogo = styled(Icon)`
  font-size: 1.5rem;
  background-color: #f06292;
  border-radius: 50%;
  color: #fff;
  padding: 0.5rem;
  display: inline-block;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 0.5rem;
`;

const Description = styled.div`
  padding: 0 1rem;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem 1rem 0;
`;

const CareerTagline = styled.div``;

const TitleTagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 0.8rem;
`;

export {
  Icon,
  CareerLogo,
  TitleWrapper,
  Description,
  TopSection,
  CareerTagline,
  TitleTagWrapper,
  CareerContainer,
  CareerTitle,
  SectionTitle,
  DetailSection,
  SalaryStart,
  Start,
  SalaryTenYear,
  TenYear,
  TableContainer,
  TableColumn,
  Grade,
};
