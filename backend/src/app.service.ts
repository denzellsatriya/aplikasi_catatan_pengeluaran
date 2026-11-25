import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  findAll() {
    return this.prisma.expense.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const item = await this.prisma.expense.findUnique({
      where: { id: Number(id) },
    });
    if (!item) throw new NotFoundException(`Data #${id} tidak ditemukan`);
    return item;
  }

  create(payload: any) {
    return this.prisma.expense.create({
      data: {
        title: payload.title,
        amount: Number(payload.amount),
        category: payload.category,
        note: payload.note ?? null,
        expenseDate: payload.expenseDate ? new Date(payload.expenseDate) : undefined,
      },
    });
  }

  async update(id: number, payload: any) {
    await this.findOne(id);
    return this.prisma.expense.update({
      where: { id: Number(id) },
      data: {
        ...(payload.title !== undefined && { title: payload.title }),
        ...(payload.amount !== undefined && { amount: Number(payload.amount) }),
        ...(payload.category !== undefined && { category: payload.category }),
        ...(payload.note !== undefined && { note: payload.note }),
        ...(payload.expenseDate !== undefined && {
          expenseDate: new Date(payload.expenseDate),
        }),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.expense.delete({
      where: { id: Number(id) },
    });
  }

  async getStats(category?: string) {
  const where = category ? { category } : undefined;

  const [count, aggregate] = await Promise.all([
    this.prisma.expense.count({ where }),
    this.prisma.expense.aggregate({
      where,
      _sum: { amount: true },
    }),
  ]);

  return {
    category: category ?? 'ALL',
    totalTransactions: count,
    totalAmount: aggregate._sum.amount ?? 0,
  };
}
}