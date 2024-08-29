import styled from 'styled-components';
import WriteFormContainer from '../components/WriteFormContainer';
import WriteSidebar from '../components/WriteSidebar';
import WriteHearder from '../components/WriteHearder';

const Writing = () => {
  return (
    <SyPage>
      <WriteSidebar />
      <SyContainer>
        <WriteHearder />
        <WriteFormContainer />
      </SyContainer>
    </SyPage>
  );
};

export default Writing;

const SyPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
