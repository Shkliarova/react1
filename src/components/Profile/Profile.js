import {
    ProfileWrap,
    Img,
    ProfileName,
    ProfileTag,
    Location,
    StatsTitle,
    StatsItems,
    StatsList
} from "./Profile.styled"

export const Profile = ({ username, tag, location, avatar, stats, id }) => {
    return (
        <ProfileWrap>
            <div>
                <Img
                src={avatar}
                alt={username}
                width="150"
                />
                <ProfileName>{username}</ProfileName>
                <ProfileTag>@{tag}</ProfileTag>
                <Location>{location}</Location>
            </div>
            <StatsList key={id}>
                <StatsItems>
                    <StatsTitle>Followers</StatsTitle>
                    <span>{stats.followers}</span>
                </StatsItems>
                <StatsItems>
                    <StatsTitle>Views</StatsTitle>
                    <span>{stats.views}</span>
                </StatsItems>
                <StatsItems>
                    <StatsTitle>Likes</StatsTitle>
                    <span>{stats.likes}</span>
                </StatsItems>
            </StatsList>
        </ProfileWrap>
    )
}