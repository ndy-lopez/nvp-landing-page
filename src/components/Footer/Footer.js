import React from 'react';
import {
	FooterLogo,
	SocialIcon,
	FooterRights,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
} from './FooterStyles';
import { Section } from '../../globalStyles';

function Footer() {
	return (
		<Section padding="4rem 0 2rem 0">
			<FooterWrapper>
				<FooterGrid justify="space-between">
					<FooterColumn id="footerLogo">
						<FooterLogo to="/">
							<SocialIcon src="./assets/logo.png" />
							NPE
						</FooterLogo>
						<FooterAddress>
							Montréal, Québec
						</FooterAddress>

					</FooterColumn>
à
				</FooterGrid>
				<FooterRights>NPE © 2023</FooterRights>
			</FooterWrapper>
		</Section>
	);
}

export default Footer;
