import styled from "styled-components";

const QuestionSection = () => {
  return (
    <>
      <BGC>
        <Title>자주묻는 질문</Title>
        <QuestionWrapper>
          <QuestionContainer>
            <p style={{ fontSize: "3rem", fontWeight: "600" }}>Q.</p>
            <QuestionBox>
              <Question>숭멋사는 어떤 동아리인가요?</Question>
              <Answer>
                숭멋사는 전공자와 비전공자의 구분없이 모두가 함께 성장할 수 있는 IT 동아리입니다.
                다양한 프로젝트를 진행하며 협업 경험을 쌓을 수 있습니다.
              </Answer>
            </QuestionBox>
          </QuestionContainer>
        </QuestionWrapper>
      </BGC>
    </>
  );
};

export default QuestionSection;

const BGC = styled.div`
  background: #fff;
  color: black;
  width: 100%;
  padding: 8.9rem 20rem;
`;

const Title = styled.div`
  color: var(--90, #1a1a1a);

  /* Web/Pretendard/Title3 */
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.4px;
`;

const QuestionWrapper = styled.div`
  margin: 6.1rem 0;
`;
const QuestionContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  padding: 4rem 0;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.14);
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.14);
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

const Question = styled.div`
  color: #000;
  margin-top: 0.5rem;

  /* Web/Pretendard/Body2 */
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Answer = styled.div`
  color: rgba(0, 0, 0, 0.6);

  /* Web/Pretendard/Body4 */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.18px;
`;
