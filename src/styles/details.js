import styled from 'styled-components';

// TODO arrows on university sides for swiping
// TODO swipe universities

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

const Salary = styled.h3`
  font-size: 1.3rem;
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

const Grades = styled.p`
  color: #00695c;
  text-align: right;
  font-size: 1rem;
`;

const GradeBagrut = styled.p`
  text-align: right;
`;

const ReqBagrut = styled.p`
  text-align: right;
`;

const UserBagrut = styled.p`
  color: #269826;
  text-align: right;
`;

const GradePsyc = styled.p`
  text-align: right;
`;

const ReqPsyc = styled.p`
  text-align: right;
`;

const UserPsyc = styled.p`
  color: #d32f2f;
  text-align: right;
`;

const GradeTawjihi = styled.p`
  text-align: right;
`;

const ReqTawjihi = styled.p`
  text-align: right;
`;

const UserTawjihi = styled.p`
  text-align: right;
`;

export {
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
  GradeBagrut,
  ReqBagrut,
  UserBagrut,
  GradePsyc,
  ReqPsyc,
  UserPsyc,
  GradeTawjihi,
  ReqTawjihi,
  UserTawjihi,
};
