import ArrowRightIcon from "@/public/assets/images/icon-arrow-right.svg";
import ChangesSavedIcon from "@/public/assets/images/icon-changes-saved.svg";
import ChevronDownIcon from "@/public/assets/images/icon-chevron-down.svg";
import CodepenIcon from "@/public/assets/images/icon-codepen.svg";
import CodewarsIcon from "@/public/assets/images/icon-codewars.svg";
import DevToIcon from "@/public/assets/images/icon-devto.svg";
import DragDropIcon from "@/public/assets/images/icon-drag-and-drop.svg";
import EmailIcon from "@/public/assets/images/icon-email.svg";
import FacebookIcon from "@/public/assets/images/icon-facebook.svg";
import FreecodeCamp from "@/public/assets/images/icon-freecodecamp.svg";
import FrontendMentorIcon from "@/public/assets/images/icon-frontend-mentor.svg";
import GithubIcon from "@/public/assets/images/icon-github.svg";
import GitLabIcon from "@/public/assets/images/icon-gitlab.svg";
import HashNodeIcon from "@/public/assets/images/icon-hashnode.svg";
import LinkCopiedToClipboardIcon from "@/public/assets/images/icon-link-copied-to-clipboard.svg";
import LinkIcon from "@/public/assets/images/icon-link.svg";
import LinkedInIcon from "@/public/assets/images/icon-linkedin.svg";
import LinksHeaderIcon from "@/public/assets/images/icon-links-header.svg";
import PasswordIcon from "@/public/assets/images/icon-password.svg";
import PreviewHeaderIcon from "@/public/assets/images/icon-preview-header.svg";
import ProfileDetailsHeaderIcon from "@/public/assets/images/icon-profile-details-header.svg";
import StackOverflowIcon from "@/public/assets/images/icon-stack-overflow.svg";
import TwitchIcon from "@/public/assets/images/icon-twitch.svg";
import TwitterIcon from "@/public/assets/images/icon-twitter.svg";
import UploadImageIcon from "@/public/assets/images/icon-upload-image.svg";
import YouTubeIcon from "@/public/assets/images/icon-youtube.svg";
import IllustrationEmptyState from "@/public/assets/images/illustration-empty.svg";
import IllustrationPhoneMockup from "@/public/assets/images/illustration-phone-mockup.svg";
import LogoDevLinkLarge from "@/public/assets/images/logo-devlinks-large.svg";
import LogoDevLinkSmall from "@/public/assets/images/logo-devlinks-small.svg";

export const getIcon = (icon: string) => {
  switch (icon) {
    case "arrow-right":
      return ArrowRightIcon;
    case "changes-saved":
      return ChangesSavedIcon;
    case "chevron-down":
      return ChevronDownIcon;
    case "codepen":
      return CodepenIcon;
    case "codewars":
      return CodewarsIcon;
    case "devto":
      return DevToIcon;
    case "drag-drop":
      return DragDropIcon;
    case "email":
      return EmailIcon;
    case "facebook":
      return FacebookIcon;
    case "freecodecamp":
      return FreecodeCamp;
    case "frontend-mentor":
      return FrontendMentorIcon;
    case "github":
      return GithubIcon;
    case "gitlab":
      return GitLabIcon;
    case "hashnode":
      return HashNodeIcon;
    case "link-copied-to-clipboard":
      return LinkCopiedToClipboardIcon;
    case "link":
      return LinkIcon;
    case "linkedin":
      return LinkedInIcon;
    case "links-header":
      return LinksHeaderIcon;
    case "password":
      return PasswordIcon;
    case "preview-header":
      return PreviewHeaderIcon;
    case "profile-details-header":
      return ProfileDetailsHeaderIcon;
    case "stack-overflow":
      return StackOverflowIcon;
    case "twitch":
      return TwitchIcon;
    case "twitter":
      return TwitterIcon;
    case "upload-image":
      return UploadImageIcon;
    case "youtube":
      return YouTubeIcon;
    case "illustration-empty":
      return IllustrationEmptyState;
    case "illustration-phone-mockup":
      return IllustrationPhoneMockup;
    case "logo-large":
      return LogoDevLinkLarge;
    case "logo-small":
      return LogoDevLinkSmall;
    default:
      return null;
  }
};
