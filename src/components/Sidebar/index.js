import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'
import { Button } from '../ButtonElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        <SidebarRoute to="/">ご案内</SidebarRoute>
                    </SidebarLink>
                    <SidebarLink to="process" onClick={toggle}>
                        <SidebarRoute to="/">ご利用までの流れ</SidebarRoute>
                    </SidebarLink>
                    <SidebarLink to="access" onClick={toggle}>
                        <SidebarRoute to="/">アクセス</SidebarRoute>
                    </SidebarLink>
                    <SidebarRoute to="/overview" onClick={toggle}>会社概要</SidebarRoute>
                </SidebarMenu>
                <SideBtnWrap>
                        <Button to="contact" primary="true" big="true" dark="true" fontBig="true" btnDisplay="true">お問い合わせ</Button>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
