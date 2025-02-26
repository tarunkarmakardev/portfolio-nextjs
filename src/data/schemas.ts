import { z } from "zod";

export const PortfolioDataSchema = z.object({
  aboutMe: z.object({
    recentCompany: z.object({ text: z.string(), url: z.string() }),
    content: z.string(),
  }),
  skills: z.array(z.object({ text: z.string(), image: z.string() })),
  projects: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      image: z.string(),
      github: z.string(),
    })
  ),
  contactChannels: z.array(
    z.object({
      type: z.string(),
      address: z.string(),
      icon: z.string(),
      text: z.string(),
    })
  ),
  workExperiences: z.array(
    z.object({
      company: z.string(),
      position: z.string(),
      duration: z.string(),
      description: z.string(),
    })
  ),
});

export const DriveImageGetPayload = z.object({
  url: z.string(),
});
export const DriveImageGetData = z.object({
  src: z.string(),
});

export type PortfolioData = z.infer<typeof PortfolioDataSchema>;

export type DriveImageGetPayload = z.infer<typeof DriveImageGetPayload>;
export type DriveImageGetData = z.infer<typeof DriveImageGetData>;
