import icon_prev from '@/assets/icons/icon_prev.svg';
import LOGO_SYMBOL from '@/assets/icons/LOGO_SYMBOL.svg';
import LOGOTYPE from '@/assets/icons/LOGOTYPE_true.svg';
import icon_search from '@/assets/icons/icon_search.svg';

interface HeaderProps {
  isShowLogo?: boolean;
  isShowPrev?: boolean;
  isShowSymbol?: boolean;
  isShowSearch?: boolean;
  isShowSubmit?: boolean;
  empty?: boolean; // 헤더 영역에 2개 요소만 사용 시 해당 prop 전달 필요
  customStyle?: string;
  children?: string;
}

const Header: React.FC<HeaderProps> = ({
  isShowLogo,
  isShowPrev,
  isShowSymbol,
  isShowSearch,
  isShowSubmit,
  empty,
  customStyle,
  children,
}) => {
  let homeLogo;
  let symbolLogo;
  let prevIcon;
  let searchIcon;
  let paragraph;
  let submitButton;
  let emptyBox;
  const defaultStyle =
    'h-96p flex w-375px items-center justify-around pb-19px pt-54px';

  const handlePreviousPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    history.go(-1);
  };

  if (isShowLogo !== undefined) {
    if (isShowLogo) {
      homeLogo = (
        <a href="/">
          <img src={LOGOTYPE} alt="찾아줘!" />
        </a>
      );
    } else {
      return homeLogo;
    }
  }

  if (isShowSymbol !== undefined) {
    if (isShowSymbol) {
      symbolLogo = (
        <a href="/">
          <img src={LOGO_SYMBOL} alt="메인으로" />
        </a>
      );
    } else {
      return symbolLogo;
    }
  }

  if (isShowPrev !== undefined) {
    if (isShowPrev) {
      prevIcon = (
        <a href="/" onClick={handlePreviousPage}>
          <img src={icon_prev} alt="이전으로" />
        </a>
      );
    } else {
      return prevIcon;
    }
  }

  if (isShowSearch !== undefined) {
    if (isShowSearch) {
      searchIcon = (
        <a href="/" onClick={handlePreviousPage}>
          <img src={icon_search} alt="이전으로" />
        </a>
      );
    } else {
      return searchIcon;
    }
  }

  if (isShowSubmit !== undefined) {
    if (isShowSubmit) {
      submitButton = (
        <button type="submit" className="text-primary">
          완료
        </button>
      );
    } else {
      submitButton = (
        <button type="submit" className="text-gray-400">
          완료
        </button>
      );
    }
  }

  if (children !== undefined) {
    paragraph = <p className="w-113px text-20px">{children}</p>;
  }

  if (empty !== undefined) {
    emptyBox = <span className="h-21px w-21px"></span>;
  }

  return (
    <header>
      <div className={`${defaultStyle} ${customStyle}`}>
        {prevIcon}
        {symbolLogo}
        {paragraph}
        {homeLogo}
        {searchIcon}
        {submitButton}
        {emptyBox}
      </div>
    </header>
  );
};

export default Header;
