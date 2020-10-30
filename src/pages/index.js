import React from "react";
import theme from "theme";
import { Theme, Text, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="p" font="--lead" margin="20px 0 0 0">
				sdcdcsdcd
			</Text>
			<Button font="--lead" margin="20px" color="#ff0000">
				Button
			</Button>
		</Section>
	</Theme>;
});