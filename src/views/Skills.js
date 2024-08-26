import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { SKILLS } from '../data';
import { Trans, withNamespaces } from 'react-i18next'

const Skills = ({ t }) => {
    return (
        <div className="column container fullscreen center-h center-v">
            <div className="background-header">{t('skills.page_title')}</div>
            <div className="text-align-left-sm h-100 ml-auto mr-auto" style={{ width: "90%" }}>
                <div className="column h-100 center-v">
                    <h2 className="font-rhyme text-light">
                        <Trans i18nKey="skills.my_skills" >
                            WHAT ARE MY <b>SKILLS? #</b>
                        </Trans>
                    </h2>
                    <h3 className="font-space text-normal mt-xs">
                        {t('skills.questions')}
                    </h3>
                    <div id="skill-grid" className="mb-xs grid-wrapper space-between mt-lg w-100" style={{ fontSize: "1.8rem" }}>
                        {
                            Object.keys(SKILLS).map((domain) =>
                                <div className="w-100" key={domain}>
                                    <div className="row space-between mb-xs">
                                        <h3 className="text-start text-bold">{t(`skills.${SKILLS[domain].title}`)}</h3>
                                        <Icon icon={SKILLS[domain].icon}></Icon>
                                    </div>
                                    <div className="grid-item">
                                        {
                                            SKILLS[domain].skills.map((domainSkill, index) =>
                                                <Fragment key={index}>
                                                    <div className="text-start font-rhyme">
                                                        {domainSkill.values.map(v => <div key={v}>{v}</div>)}
                                                    </div>
                                                    <div className="text-end text-muted font-space">{t(`skills.${domainSkill.state}`)}</div>
                                                </Fragment>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withNamespaces()(Skills);
