import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
	const familyMembers = [
		{ displayName: "Amy", color: "blue" },
		{ displayName: "Dad", color: "green" },
		{ displayName: "Jackson", color: "red" },
		{ displayName: "Tyler", color: "yellow" },
		{ displayName: "Mason", color: "purple" },
	];

	for (const member of familyMembers) {
		await prisma.familyMember.create({ data: member });
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
