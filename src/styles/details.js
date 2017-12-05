import styled from 'styled-components';

// TODO arrows on university sides for swiping
// TODO swipe universities

const CareerContainer = styled.div`
  background-color: #f5f5f5;
  padding: 2.5rem;
  font-size: 1.2rem;
  height: calc(100vh - 4rem);
  line-height: 1.8rem;
`;

const GeneralSection = styled.section`
  display: flex;
  justify-content: center;
`;

const CareerTitle = styled.h1`
  font-size: 2rem;
  line-height: 2.8rem;
`;
const About = styled.h3`
  font-size: 1.5rem;
  color: #00695c;
`;

const CareerDescription = styled.p`
  font-size: 1.3rem;
  padding: 0.5rem 0 1.5rem 0;
  border-bottom: 0.1rem solid #dcdcdc;
`;

const SalarySection = styled.section`
  padding: 1.5rem 0;
  border-bottom: 0.1rem solid #dcdcdc;
  font-size: 1.3rem;
`;

const Salary = styled.h3`
  font-size: 1.5rem;
  color: #00695c;
`;

const SalarySrart = styled.p`
  font-size: 1.3rem;
`;

const Start = styled.span``;

const SalaryTenYear = styled.p``;

const TenYear = styled.span``;

const UniSection = styled.section`
  font-size: 1.3rem;
  padding: 1.5rem 0;
`;

const University = styled.h3`
  font-size: 1.5rem;
  color: #00695c;
  text-align: center;
`;

const GradesContainer = styled.table``;
const TableRow1 = styled.tr``;
const TableRow2 = styled.tr``;
const TableRow3 = styled.tr``;
const TableRow4 = styled.tr``;

const Grades = styled.th`
  font-size: 1.5rem;
  color: #00695c;
  padding-top: 1rem;
  text-align: left;
`;

const Column1 = styled.td``;
const Column2 = styled.td``;

const GradeBagrut = styled.th`
  text-align: left;
  padding-top: 0.5rem;
`;

const ReqBagrut = styled.td`
  padding-left: 0.6rem;
`;

const UserBagrut = styled.td`
  color: #269826;
  padding-left: 1rem;
`;

const GradePsyc = styled.th`
  text-align: left;
  padding-top: 0.5rem;
`;

const ReqPsyc = styled.td`
  padding-left: 0.6rem;
`;

const UserPsyc = styled.td`
  color: #d32f2f;
  padding-left: 1rem;
`;

const GradeTawjihi = styled.th`
  text-align: left;
  padding-top: 0.5rem;
`;

const ReqTawjihi = styled.td`
  padding-left: 0.6rem;
`;

const UserTawjihi = styled.td`
  padding-left: 1rem;
`;

export {
  CareerContainer,
  GeneralSection,
  CareerTitle,
  About,
  CareerDescription,
  SalarySection,
  Salary,
  SalarySrart,
  Start,
  SalaryTenYear,
  TenYear,
  UniSection,
  University,
  GradesContainer,
  TableRow1,
  TableRow2,
  TableRow3,
  TableRow4,
  Column1,
  Column2,
  Grades,
  GradeBagrut,
  ReqBagrut,
  UserBagrut,
  GradePsyc,
  ReqPsyc,
  UserPsyc,
  GradeTawjihi,
  ReqTawjihi,
  UserTawjihi
};
