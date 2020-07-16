import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface RequestDTO {
  value: number;
  title: string;
  type: 'income' | 'outcome';
}
class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ type, title, value }: RequestDTO): Transaction {
    const transaction = this.transactionsRepository.create({
      type,
      title,
      value,
    });

    return transaction;
  }
}

export default CreateTransactionService;
