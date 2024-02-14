import {
  handleFollowerGetByUserId,
  handleFollowingGetByUserId,
} from "@/utils/api";

interface baseProfileProps {
  userId: string;
  userName: string;
  userImage: string;
  description: string;
  email: string;
  sns: {
    instagram?: string;
    github?: string;
    sfacfolio?: string;
    rocketpunch?: string;
    youtube?: string;
  };
  careers: {
    [index: string]: {
      companyName: string;
      period: string;
      position: string;
    };
  };
  contest: {
    [index: string]: {
      companyName: string;
      period: string;
      description: string;
    };
  };
  skills: {
    [index: string]: string;
  };
}

const parseData = (data: { [index: string]: string }) => {
  return Object.entries(data);
};

const parseArrayData = (data: {
  [index: string]: { [index: string]: string };
}) => {
  return Object.entries(data);
};

const reduceCareers = () => {};

const BaseProfile = async ({
  userId,
  userName,
  description,
  userImage,
  email,
  sns,
  careers,
  contest,
  skills,
}: baseProfileProps) => {
  const followerData = await handleFollowerGetByUserId(userId);
  const followingData = await handleFollowingGetByUserId(userId);
  const parsedSns = sns ? parseData(sns) : [];
  const parsedCareers = careers ? parseArrayData(careers) : [];
  const parsedContest = contest ? parseArrayData(contest) : [];
  const parsedSkills = skills ? parseData(skills) : [];
  console.log(parsedCareers);

  return (
    <div>
      <div className="w-[334px] min-h-[1107px] bg-background-blue rounded-[10px] mx-auto flex flex-col gap-[15px] py-[30px] items-center">
        <div className="grid place-items-center flex flex-col gap-[3px]">
          <img
            src={`https://nf01uyzvha.execute-api.ap-northeast-2.amazonaws.com/api/files/_pb_users_auth_/${userId}/${userImage}`}
            alt="이미지를 설정"
            className="w-[80px] h-[80px] rounded-full"
          />
          <p className="text-neutral-100 body-4-bold mb-[2px]">{userName}</p>
          <p className="text-neutral-70 body-7">
            {description || "자기 소개를 입력해 주세요."}
          </p>
          <p className="text-neutral-30 caption-4 flex gap-[2px]">
            <img src="/icons/mypage/link.svg" />
            {email}
          </p>
        </div>

        <button className="w-[304px] h-[40px] text-neutral-0 body-7-bold bg-primary-80 rounded-[10px] flex gap-[3px] place-items-center justify-center">
          <img src="/icons/mypage/pencil.svg" />
          프로필 편집
        </button>
        <div className="w-[304px] min-h-[90px] bg-neutral-0 rounded-[10px] flex gap-[55px] place-items-center justify-center">
          <div className="grid place-items-center">
            <p className="text-primary-100 body-4-bold">
              {followingData.length}
            </p>
            <p className="text-neutral-40 body-6-bold">팔로우</p>
          </div>
          <div className="w-[1px] h-[60px] bg-stroke-10" />
          <div className="grid place-items-center">
            <p className="text-primary-100 body-4-bold">
              {followerData.length}
            </p>
            <p className="text-neutral-40 body-6-bold">팔로워</p>
          </div>
        </div>

        <div className="w-[304px] min-h-[332px] bg-neutral-0 rounded-[10px] gap-[25px] p-[20px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[10px]">
              <p className="text-neutral-90 body-6-bold">경력</p>
              <div className="flex flex-col gap-[25px]">
                <div className="flex gap-[15px] place-items-center justify-center">
                  <div className="grid place-items-center">
                    <p className="text-primary-100 body-3-bold">
                      {parsedCareers.length}
                    </p>
                    <p className="text-neutral-70 body-7">경력 연차</p>
                  </div>
                  <div className="w-[1px] h-[60px] bg-stroke-10" />
                  <div className="grid place-items-center">
                    <p className="text-primary-100 body-3-bold">
                      {parsedContest.length}
                    </p>
                    <p className="text-neutral-70 body-7">공모전 입상</p>
                  </div>
                  <div className="w-[1px] h-[60px] bg-stroke-10" />
                  <div className="grid place-items-center">
                    <p className="text-primary-100 body-3-bold">
                      {parsedSkills.length}
                    </p>
                    <p className="text-neutral-70 body-7">기술 보유</p>
                  </div>
                </div>
                <div className="flex gap-[5px] flex-wrap">
                  {parsedSkills.map(item => (
                    <span
                      className="h-[21px] text-primary-100 caption-4 border-primary-100 border rounded-[100px] py-[2px] px-[10px]"
                      key={item[0]}
                    >
                      {item[1]}
                    </span>
                  ))}
                </div>
                <div className="border-t border-stroke-10" />
              </div>
            </div>
            <div>
              <p className="text-neutral-90 body-6-bold">SNS 연동</p>
              <div></div>
            </div>
          </div>
        </div>
        <div className="w-[304px] h-[197px] bg-neutral-0 rounded-[10px] p-[20px] flex flex-col gap-[15px]">
          <p className="text-neutral-90 body-6-bold">나의 활동</p>
          <div className="h-[28px] flex justify-between">
            <p className="text-neutral-70 body-7 flex gap-[5px] items-center">
              <img src="/icons/mypage/Log_like.svg" />
              관심 로그
            </p>
            <button>
              <img src="/icons/mypage/arrowBtn.svg" />
            </button>
          </div>
          <div className="h-[28px] flex justify-between">
            <p className="text-neutral-70 body-7 flex gap-[5px] items-center">
              <img src="/icons/mypage/Log_view.svg" />
              최근 본 로그
            </p>
            <button>
              <img src="/icons/mypage/arrowBtn.svg" />
            </button>
          </div>
          <div className="h-[28px] flex justify-between">
            <p className="text-neutral-70 body-7 flex gap-[5px] items-center">
              <img src="/icons/mypage/comment.svg" />
              내가 쓴 댓글
            </p>
            <button>
              <img src="/icons/mypage/arrowBtn.svg" />
            </button>
          </div>
        </div>
        <div className="w-[304px] min-h-[152px] bg-neutral-0 rounded-[10px] p-[20px] flex flex-col gap-[15px]">
          <p className="text-neutral-90 body-6-bold">계정</p>
          <div className="h-[28px] flex justify-between">
            <p className="text-neutral-70 body-7 flex gap-[5px] items-center">
              <img src="/icons/mypage/signout.svg" />
              로그아웃
            </p>
            <button>
              <img src="/icons/mypage/arrowBtn.svg" />
            </button>
          </div>
          <div className="h-[28px] flex justify-between">
            <p className="text-neutral-70 body-7 flex gap-[5px] items-center">
              <img src="/icons/mypage/quit.svg" />
              회원탈퇴
            </p>
            <button>
              <img src="/icons/mypage/arrowBtn.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseProfile;