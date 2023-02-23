USE [TodoDB]
GO

/****** Object:  Table [dbo].[TodoUser]    Script Date: 23/02/2023 15:45:02 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[TodoUser](
	[Id] [int] IDENTITY(0,1) NOT NULL,
	[Username] [nvarchar](10) NOT NULL,
	[Password] [nvarchar](16) NOT NULL,
 CONSTRAINT [PK_TodoUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


